import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
      componentDidMount() {
            this.props.fetchSurveys();
      }


      renderSurveyss() {

            return this.props.surveys.reverse().map(survey => {
                  return (

                        <div className="card darken-1" key={survey.id} >

                              <div className="card-content">
                                    <span className="card-title">{survey.title}</span>
                                    <p>
                                          {survey.body}
                                    </p>
                                    <p className="right">

                                          Sent On :{new Date(survey.dateSent).toLocaleDateString()}
                                    </p>
                              </div>

                             <div className="card-action">
                             <a> Yes Votes: {survey.yes}</a>                     
                             <a> No Votes: {survey.no}</a> 
                                   

                             </div>

                        </div>
                  );

            });

      }
      render() {
            return (
                  <div>
                        {this.renderSurveyss()}
                  </div>
            );

      }

}

function mapStateToProps({ surveys }) {

      return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);