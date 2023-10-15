import image from "../../assets/image.jpeg";

const Feehistory = () => {
  return (
    <div>
      <div className="w-[100%] h-[500px] flex justify-center items-center">
        <div className="w-[50%] h-[400px] flex justify-center items-center border-[blue] border-[1px]">
          <div className="w-[400px] h-[100px] border-[#4f4f4] border-[1px] bg-[green] flex">
            <div className="w-[100px] h-[130px] flex justify-center items-center bg-slate-300 flex-col gap-3">
              <span>quantity: 1</span>
              <span>Cost 1</span>
            </div>
              <div className="w-[300px] h-[130px] flex items-center justify-center">
                <img src={image} alt="" className="w-full h-[130px] object-cover"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feehistory;
