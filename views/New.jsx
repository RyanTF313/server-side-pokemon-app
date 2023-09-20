const React = require('react');

const New = ({response})=>{
    return (
        <div>
            {response != undefined && <p>{response.message}</p>}
            <h1>Catch another!</h1>
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              <input type="submit" name="" value="Catch em!"/>
            </form>
        </div>);
  }

module.exports = New;