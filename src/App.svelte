<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import TeethClear from "./pages/TeethClear.svelte";
  import TeethContact from "./pages/TeethContact.svelte";
  import Charge from "./pages/Charge.svelte";
  import Endodontia from "./pages/Endodontia.svelte";
  import Periodontia from "./pages/Periodontia.svelte";
  import Radicular from "./pages/Radicular.svelte";
  import OralRehab from "./pages/OralRehab.svelte";
  import Channel from "./pages/Channel.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router primary={false}>
  <Header />
  <Route path="/" component={Home} />
  <Route path="clareamento-dental" component={TeethClear} />
  <Route path="lente-de-contato" component={TeethContact} />
  <Route path="protese-carga-imediata" component={Charge} />
  <Route path="periodontia" component={Periodontia} />
  <Route path="endodontia" component={Endodontia} />
  <Route path="recobrimento-radicular" component={Radicular} />
  <Route path="reabilitacao-oral" component={OralRehab} />
  <Route path="canal-dentario" component={Channel} />
  <Footer />
</Router>
