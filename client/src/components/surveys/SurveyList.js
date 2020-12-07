import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
      componentDidMount() {
            this.props.fetchSurveys();
      }
   
      render(){
          return(
           <div>
                 SurveyList
           </div>
          );

      }

}

function mapStateToProps({ surveys }) {

      return{ surveys: surveys };
}

export default connect(mapStateToProps, {fetchSurveys} )(SurveyList);