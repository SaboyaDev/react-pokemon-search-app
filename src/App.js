function App() {
  return (
    <div
      // style={{
      //   margin: "auto",
      //   width: 800,
      //   paddingTop: "1em",
      // }}
      className='container'
    >
      <img src="https://www.channelguidemag.com/wp-content/uploads/2015/04/pokemon-logo.jpg" alt="" />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bulbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
