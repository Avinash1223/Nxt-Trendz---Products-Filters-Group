import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onChangeCategory = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li key={category.categoryId} onClick={onChangeCategory}>
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoryList()}</ul>
    </>
  )

  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const OnClickRatingItem = () => changeRating(rating.ratingId)
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`
      return (
        <li key={rating.ratingId} onClick={OnClickRatingItem}>
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}> & up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingList()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilter} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingFilter()}
      <button type="button" className="clear-btn" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
