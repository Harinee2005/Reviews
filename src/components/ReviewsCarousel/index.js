import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexList: 0}

  onLeftArrow = () => {
    const {reviewsList} = this.props
    this.setState(prevState =>
      prevState.indexList > 0
        ? {indexList: prevState.indexList - 1}
        : {indexList: reviewsList.length - 1},
    )
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    this.setState(prevState =>
      prevState.indexList < reviewsList.length - 1
        ? {indexList: prevState.indexList + 1}
        : {indexList: 0},
    )
  }

  render() {
    const {reviewsList} = this.props
    const {indexList} = this.state
    const currentData = reviewsList[indexList]
    const {imgUrl, username, companyName, description} = currentData
    return (
      <div className="background ">
        <h1 className="title">Reviews</h1>
        <div className="container">
          <button type="button" data-testid="leftArrow" onClick={this.onLeftArrow}>
            <img
              className="arrow-size"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="user-details-container">
            <img className="profile-pic" src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button type="button" data-testid="rightArrow" onClick={this.onRightArrow}>
            <img
              className="arrow-size"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
