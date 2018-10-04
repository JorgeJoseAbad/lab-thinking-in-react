import React,{Component} from 'react';
import _ from 'lodash';


class ProductRow extends React.Component{

  render(){
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
    return(
      <table style={{border:'1px solid red',margin:'10px'}}>
          <tr >

            <td>{name}</td>
            <td>{product.price}</td>

          </tr>
        </table>
    )
  }
}


class ProductCategoryRow extends React.Component{
  render(){
     const category = this.props.category;
    return(
      <tr style={{border:'1px solid yellow', margin:'10px'}}>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}


class ProductTable extends React.Component{

 //no constructor

  render(){
    const rows=[] //rows of products
    let lastCategory = null;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    //Rows of products filtered
    this.props.products.forEach((product) => {

      if (product.name.indexOf(filterText) === -1) { //no ocurrence filtered text
         return;
       }
      if (inStockOnly && !product.stocked) { //filter by stock
       return;
     }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      } //end if
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );

      lastCategory = product.category;
    }); //end forEach

    return(
      <div style={{border:'1px solid green',margin:'10px'}}>
        <table>
           <thead>
             <tr>
               <th>Name</th>
               <th>Price</th>
             </tr>
           </thead>
           <tbody>{rows}</tbody>
         </table>
      </div>
    )
  }
}


class SearchBar extends React.Component{
  constructor(props){
    super(props); //props from parent binded to component construction
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStochChange=this.handleInStochChange.bind(this);
  }

/*handler to change props from child to parent */
handleFilterTextChange(event){
  this.props.onFilterTextChange(event.target.value);


}

handleInStochChange(event){
  this.props.onInStockChange(event.target.checked);

}

  render(){


    return(
      <form style={{border:'1px solid blue',margin:'10px'}}>
        <input
          type="text"
          placeholder="Enter... "
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}


        />
        <p>
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStochChange}
        />
          {' '}
          Only show products in stock
         </p>
      </form>
    )
  }
}


class FilterableProductTable extends React.Component{
  constructor(props){
    super(props); //bind props from parent to compoment contructor
    this.state={
      filterText:'',
      isStockOnly:false
    };
    //handlers binded to this
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  /* Handlers */
  handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render(){
  return(
    <div style={{border:'1px solid yellow'}}>
      <SearchBar
        filterText={this.state.filterText}
        isStockOnly={this.state.isStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange={this.handleInStockChange}
      />
      <ProductTable
        products={this.props.data}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
      />
    </div>
  )}
}


export class App extends React.Component {

render() {
  let nombre="FilterableProductTable";
  let data=_.sortBy(this.props.products.data,['category']);

    return (
        <div>
            <h1>Title App: {this.props.title}</h1>
            <FilterableProductTable nombre={nombre} data={data}/>
        </div>
    )
  }
}
