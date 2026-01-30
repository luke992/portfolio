import coverImage from "../assets/lukehann.jpg";

const HomePage = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <h1 className="pt-4 w-full text-4xl font-bold text-center">Luke Hann</h1>
        <img src={coverImage} alt="Luke Hann" className="w-1/2 object-cover" />
      </div>
    </>
  )
}

export default HomePage;
