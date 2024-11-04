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
import StateEx from './components/states/StateEx'

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

      {/* Destructuring props  */}
      {/* <DestruStudentList/> */}

      {/* <EventHandling/> */}

      {/* <PassEventHandlerProps/> */}

      {/* <EventPropagation/> */}
      <StateEx/>

    </>
  )
}

export default App