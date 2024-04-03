import { Flex, Text } from "@chakra-ui/react"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import Title from "../../components/Title/Title"
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner"
import FavoriteExercises from "../../components/FavoriteExercises/FavoriteExercises"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const ProfilePage = () => {
  const { user } = useContext(AuthContext)
  const { username, email, avatar, favoriteExercises } = user

  const handleUserEdit = () => {}
  const handleUserDeletion = () => {}

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"44px"}>
        <Title>Welcome {username}!</Title>
        <ProfileBanner
          username={username}
          email={email}
          avatar={avatar}
          handleUserDeletion={handleUserDeletion}
          handleUserEdit={handleUserEdit}
        />
        {favoriteExercises.length !== 0 && (
          <FavoriteExercises favoriteExercises={favoriteExercises} />
        )}
      </Flex>
    </PageWrapper>
  )
}

export default ProfilePage
