const { default: Navbar } = require("./Navbar");

function StudentChapterHome(props) {
  return (
    <div>
      <Navbar history={props.history} />
      Student Chapter Home
    </div>
  );
}

export default StudentChapterHome;
