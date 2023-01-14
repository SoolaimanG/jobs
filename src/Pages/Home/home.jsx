import "./home.css";
import Data from "../../Data";
const Home = () => {
  console.log(Data);
  return (
    <div className="home container">
      <div className="home__one">
        {Data.map((datas) => {
          return (
            <div key={datas.id} className="home__two">
              <div className="home__three">
                <div className="home___abs">
                  <img src={datas.logo} alt="" />
                </div>
                <div className="home__four">
                  <div className="home__five">
                    <h4>{datas.company}</h4>
                    <h4>{datas.new ? "NEW!" : "Old"}</h4>
                    <h4>{datas.featured ? "FEATURED" : "null"}</h4>
                  </div>
                  <h3>{datas.position}</h3>
                  <h4>
                    {datas.postedAt} . {datas.contract} . {datas.location}
                  </h4>
                </div>
              </div>
              <div className="home__six">
                <h3>{datas.role}</h3>
                <h3>{datas.languages[0]}</h3>
                <h3>{datas.languages[1]}</h3>
                <h3>{datas.languages[2]}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
