// import './App.css';
// import React, { Component } from 'react'
// import Navbar2 from './components/Navbar2';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

// export default class App extends Component {
//   state={
//     progress: 0
//   }
//   setProgress=(progress)=>{
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//       <Router>
//         <Navbar2/>
//         <LoadingBar
//           color='#f11946'
//           height={1}
//           progress={this.state.progress}
//       />
//         <Routes>
//         <Route exact path="/" element={<News setProgress={this.setProgress}  key="india" category="india"/>}></Route>
//           <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" category="business"/>}></Route>
//           <Route exact path="/movies" element={<News setProgress={this.setProgress}  key="movies" category="movies"/>}></Route>
//           <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports"/>}></Route>
//           <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" category="science"/>}></Route>
//           <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" category="technology"/>}></Route>
//           <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" category="general"/>}></Route>
//           <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" category="health"/>}></Route>
//         </Routes>
//       </Router>
//       </div>
//     )
//   }
// }


import './App.css';
import React, {useState } from 'react'
import Navbar2 from './components/Navbar2';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App(){
  const[progress,setProgress] = useState(0);
  
    return (
      <>
      <div>
      <Router>
        <Navbar2/>
        <LoadingBar
          color='#f11946'
          height={1}
          progress={progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}  key="india" category="india"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress}  key="business" category="business"/>}></Route>
          <Route exact path="/movies" element={<News setProgress={setProgress}  key="movies" category="movies"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" category="sports"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" category="science"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" category="technology"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" category="health"/>}></Route>
        </Routes>
      </Router>
      </div>
      </>
    )
  }

  export default App;
