import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var date = new Date();
    
    var age = date.getFullYear()-2001;
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Padda Yogeshwara Rao,</span> a Web
            Developer
          </h3>
          <p
            className="leading-7 text-white text-justify"
            data-aos={"fade-left"}
          >
            I am currently pursuing BTech degree in MVGR College of Engineering,. I am {getDate()}{" "}
            years old. I love exploring new technologies.
          </p>
          <p
            className="leading-7 text-white text-justify"
            data-aos={"fade-left"}
          >
            Click here 👇 to know more about my skill set and certifications <br/>
            <button className="py-1 mt-3 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href="#resume"
            >
              Know More
              
            </a>
          </button>
          </p>
          <p
            className="text-justify leading-7 text-white"
            data-aos={"fade-right"}
          >
            I am currently looking for jobs. I am also a programmer.
            I worked on reactJs, NextJs, TypeScript, Java and many more. I am
            also looking for an opportunity to leverage skills and
contribute effectively to a dynamic work environment.
          </p>
          
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
           href="https://drive.google.com/uc?export=download&id=13ydE4WEq80C_PuEYUVViYJQi-MmWQyem"
           
      
            >
              Download Resume
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
