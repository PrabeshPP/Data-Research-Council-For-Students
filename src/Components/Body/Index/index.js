import classes from "./index.module.css";
import IndexImage from "./indexImage";
import Description from "./description";

const Index = () => {
  return (
    <div className={classes.container}>
      <Description />
      <IndexImage />
    </div>
  );
};

export default Index;
