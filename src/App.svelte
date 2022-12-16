<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import TeethClear from "./pages/TeethClear.svelte";
  import TeethContact from "./pages/TeethContact.svelte";
  import Protesys from "./pages/Protesys.svelte";
  import Charge from "./pages/Charge.svelte";
  import Edodontia from "./pages/Edodontia.svelte";
  import Periodontia from "./pages/Periodontia.svelte";
  import Radicular from "./pages/Radicular.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router primary={false}>
  <Header />
  <Route path="/" component={Home} />
  <Route path="clareamento-dental" component={TeethClear} />
  <Route path="lente-de-contato" component={TeethContact} />
  <Route path="proteses" component={Protesys} />
  <Route path="protese-carga-imediata" component={Charge} />
  <Route path="periodontia" component={Periodontia} />
  <Route path="edodontia" component={Edodontia} />
  <Route path="recobrimento-radicular" component={Radicular} />
  <Footer />
</Router>
