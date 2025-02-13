import React from 'react'
import DynamicValues from './components//Basics/DynamicValues'
import ConditionalRendering from './components/Basics/ConditionalRendering'
import InterviewQuestions from './components/Basics/InterviewQuestions'
import DefaultImportEx from './components/ImportExport/DefaultImportEx'
import NamedExportImpl from './components/ImportExport/NamedExportImpl'
import DefaultNamedimpl from './components/ImportExport/DefaultNamedimpl'
import Looping from './components/LoopingInJsx/Looping'
import StudentList from './components/props/StudentList'
import DestruStudentList from './components/DestructuringProps/DestruStudentList'
import EventHandling from './components/EventHandling/EventHandling'
import PassEventHandlerProps from './components/EventHandling/PassEventHandlerProps'
import EventPropagation from './components/EventHandling/EventPropagation'
import UseState from './components/useState/UseState'
import A from './components/useContext/A'
import B from './components/useContext/B'
import C from './components/useContext/C'
import DisplayJsxAsProps from './components/JsxAsProps/DisplayJsxAsProps'
import Inline from './components/styles/Inline'
import Digitalclock from './components/useEffect/Digitalclock'
import Parent from './components/props/Parent'
import ToggleSwitch from './components/ToggleSwitchProject/ToggleSwitch'

export const UserContext = React.createContext();

const App = () => {
  return (
    <>
      {/* <DynamicValues/> */}
      {/* <ConditionalRendering/> */}
      {/* <InterviewQuestions/> */}

      {/* Import and export components */}
      {/* <DefaultImportEx/> */}
      {/* <NamedExportImpl/> */}
      {/* <DefaultNamedimpl/> */}

      {/* Looping in jsx */}
      {/* <Looping/> */}

      {/* props in jsx */}
      {/* <StudentCard/> */}

      {/* css in reactJs    */}
      {/* <Inline/> */}

      {/* pass jsx as props */}
      {/* <DisplayJsxAsProps/> */}

      {/* Destructuring props  */}
      {/* <DestruStudentList/> */}

      {/* <EventHandling/> */}

      {/* <PassEventHandlerProps/> */}

      {/* <EventPropagation/> */}

      {/* <UseState/> */}

      {/* <UserContext.Provider value={"gaurav lagad"}>
        <B />
        <A />
      </UserContext.Provider> */}

      {/* useEffect ex */}
      {/* <Digitalclock/> */}

      {/*  */}
      {/* <Parent/> */}

      {/* <ToggleSwitch/> */}

    </>
  )
}

export default App