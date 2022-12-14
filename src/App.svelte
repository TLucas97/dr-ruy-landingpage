<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import TeethClear from "./pages/TeethClear.svelte";
  import TeethContact from "./pages/TeethContact.svelte";
  import Protesys from "./pages/Protesys.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router primary={false}>
  <Header />
  <Route path="/" component={Home} />
  <Route path="clareamento-dental" component={TeethClear} />
  <Route path="lente-de-contato" component={TeethContact} />
  <Route path="proteses" component={Protesys} />
  <Footer />
</Router>
