import Header from "@/components/Header";

const ProfilePage =  async ({ params } : ParamsWithSearch) => {
    const { id } = await params;

    return (
        <div className="wrapper page">
            <Header subHeader="sofikulislam@gmail.com" title="Sofikul" userImg="/assets/images/dummy.jpg" />
            
            <h1 className="text-2xl font-karla">USER ID: {id}</h1>
        </div>
    )
}

export default ProfilePage
