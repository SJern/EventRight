const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const GatheringStore = require('../../stores/gathering_store');

const TicketsIndexItem = React.createClass({
  _handleImgClick(){
    hashHistory.push(`events/${this.props.ticket.gathering_id}`);
  },
  render(){
    let ticketedEvent = GatheringStore.find(this.props.ticket.gathering_id);
    return (
        <div  className="tickets-index-item"
              onClick={this._handleImgClick}>
            <img src={ticketedEvent.image}/>
            <div className="ticket-index-item-info">
            <p>{ticketedEvent.artist}</p>
            <p>{ticketedEvent.location}</p>
            <p>{ticketedEvent.funds}</p>
            <p>{ticketedEvent.goal}</p>
            <p>{ticketedEvent.status}</p>
            </div>
        </div>
    );
  }
});

module.exports = TicketsIndexItem;
