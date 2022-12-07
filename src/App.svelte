<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import Doc from "./pages/Doc.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router>
  <Header />
  <Route path="/" component={Home} />
  <Route path="/profile" component={Doc} />
  <Footer />
</Router>
