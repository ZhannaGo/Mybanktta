function Home(){
  return (
    <Card
      txtcolor="black"
      header="MyBank"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="banky.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
