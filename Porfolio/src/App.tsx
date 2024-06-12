
import Left from "./Component/Left";
import Right from "./Component/Right";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="  bg-[#F2F2F2]  ">
      <div className="flex  mx-auto  lg:max-w-[80%]">

        <div className="w-[30%] bg-white">
          <Left />
        </div>
        <div className="w-[70%]  ">
         <Right/>
        </div>
      </div>
    </div>
  );
};

export default App;
