//import './App.css';
//import Inline from './components/Inline';
//import ClassClick from './components/ClassClick';
//import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
//import FunctionClick from './components/FunctionClick';
//import Counter from './components/Counter';
// import Greet from './components/Greet';
//import Welcome from './components/Welcome';
//import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
//import Stylesheet from './components/Stylesheet';
// import styles from './components/appStyles.module.css'
// import './components/appStyles.css'
// import './components/myStyles.css'
//import Form from './components/Form';
//import FragmentDemo from './components/FragmentDemo';
//import ParentComp from './components/ParentComp';
//import PureComp from './components/PureComp';
//import Table from './components/Table';
//import LifecycleA from './components/LifecycleA';
//import RefsDemo from "./components/RefsDemo";
//import FRParentInput from "./components/FRParentInput";
//import FocusInput from "./components/FocusInput";
//import PortalDemo from "./components/PortalDemo";
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroName="Batman"/> */}
        {/* <Welcome  name="Bruce" heroName="Batman"/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* { <UserGreeting />} */}
        {/* { <NameList /> } */}
        {/* <Stylesheet primary = {true}/> */}
        {/* <Inline /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        <ClickCounter />
        <HoverCounter />
    </div>
  );
}

export default App;
