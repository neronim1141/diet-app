export const addToMenu = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-4">
        <div className="flex flex-col">
          <label>Calories</label>
          <div>
            <input></input>
            <span>kcal</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Energy</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Protein</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label>Total lipid (fat)</label>
          <div>
            <input></input>
            <span>g</span>
          </div>
        </div>
      </div>{" "}
      <button className="border-lime-900 border-2 w-fit self-center p-1 rounded font-bold px-4 m-4">
        Add
      </button>
    </div>
  );
};
