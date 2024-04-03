import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import exercisesService from "../../services/exercises.service"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import ExerciseDetails from "../../components/ExerciseDetails/ExerciseDetails"
import { getExerciseDetails } from "../../utils"
import Modal from "../../components/Modal/Modal"
import CustomForm from "../../components/CustomForm/CustomForm"
import {
  EDIT_EXERCISE_DATA,
  EXERCISE_MOCK,
  EXERCISE_OPTIONS,
} from "../../consts"

const ExerciseDetailsPage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [showModal, setShowModal] = useState(false)
  const [exercise, setExercise] = useState(EXERCISE_MOCK)
  const [editExerciseData, setEditExerciseData] =
    useState(EDIT_EXERCISE_DATA)
  const { id } = useParams()
  const {
    image,
    name,
    description,
    duration,
    audio,
  } = exercise
  const EXERCISE_DETAILS = getExerciseDetails(
    image,
    name,
    description,
    duration,
    audio,
  )

  const getSingleExercise = async () => {
    try {
      const singleExercise = await exercisesService.getOneExercise(id)
      setExercise(singleExercise)
    } catch (error) {
      console.log("Error ==>", error)
    }
  }

  useEffect(() => {
    getSingleExercise()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("EL NAME Y EL VALUE ==>", name, value)
    setEditExerciseData({ ...editExerciseData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedExercise = await exercisesService.editExercise(
      id,
      editExerciseData
    )
    setShowModal(false)
    setExercise(updatedExercise)
    try {
    } catch (error) {
      // MOSTRAR EL ERROR => MODAL!!! TE FALTA EL NOMBRE DE USUARIO: HACKER JIJIJI
      console.log("ERROR ==>", error)
    }
  }

  return (
    <FormPageLayout backgroundImage={image}>
      <ExerciseDetails
        onOpen={() => setShowModal(true)}
        exerciseDetails={EXERCISE_DETAILS}
      />
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <CustomForm
            options={EXERCISE_OPTIONS}
            onChange={handleChange}
            onSubmit={handleSubmit}
            title={"Edit Exercise!"}
          />
        </Modal>
      )}
    </FormPageLayout>
  )
}

export default ExerciseDetailsPage
