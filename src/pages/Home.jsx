
function Home(){
  const navigate = useNavigate();
  const goToCounter = () => navigate('/counter');
  return (
    <>
      <button onClick={goToCounter}>go to counter</button>
      <div>
        HELLO THIS IS HOMEPAGE , wlecome to inteweb
      </div>
    </>
  );
}