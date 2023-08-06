import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import AnimatedCursor from "./components/AnimatedCursor";

export default function App() {
  return (
    <Layout>
       
       <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
       
      <Slidebar />
      <Display />
    </Layout>
  );
}
