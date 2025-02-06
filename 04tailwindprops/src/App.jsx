import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Card
        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8MXwwfHx8MA%3D%3D"
        quote="Hi there, I work at Google..."
        username="Joshua Welsons"
        post="Senior Product Manager @ Google"
      />
      <Card
        image="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8MXwwfHx8MA%3D%3D"
        quote="Hi there, I work at Nvidia..."
        username="Karen Brunette"
        post="Application Developer Specialist @ Nvidia Comp"
      />
      <Card
        image="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHwxfDB8fHww"
        quote="Hi there, I work at Amazon..."
        username="Miles Morales"
        post="Staff Engineer @ Amazon.Inc"
      />
    </>
  );
}

export default App;
