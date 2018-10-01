import React,{Component} from 'react';
import data from './data.json';


const ProductRow = ()=>{
  let compName='Product Row';
  return(
    <div style={{border:'1px solid red',margin:'10px'}}>
      <h3>{compName}</h3>
    </div>
  )
}

const ProductCategoryRow = ()=>{
  let compName='Product Category Row';
  return(
    <div style={{border:'1px solid turquoise',margin:'10px'}}>
      <h3>{compName}</h3>
    </div>
  )
}

const ProductTable = ({})=>{
  let compName='Product table';
  return(
    <div style={{border:'1px solid green',margin:'10px'}}>
      <h3>{compName}</h3>
      <ProductCategoryRow/>
      <ProductRow/>
    </div>
  )
}


const SearchBar = ({})=>{
  let compName='search bar';
  return(
    <div style={{border:'1px solid blue',margin:'10px'}}>
      <h3>{compName}</h3>
    </div>
  )
}

const FilterableProductTable = ({nombre})=>{
    return(
      <div style={{border:'1px solid yellow'}}>
        <div>{nombre}</div>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
}


export class App extends Component {
render() {
  let nombre="FilterableProductTable";
  let tisprops=this.props;
  let mydata=data;
  console.log(tisprops);
  console.log(mydata);

    return (
        <div>
            <h1>Title: {this.props.title}</h1>
              <FilterableProductTable nombre={nombre}/>
        </div>
    )
  }
}
