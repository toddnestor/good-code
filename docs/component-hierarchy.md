## Component Hierarchy

**HeaderContainer**
  - Header
    - AuthHeader
      - AuthFormContainer
        - AuthForm
    - NavHeaderContainer
      - NavHeader
        - NavIndex

**ProgramIndexContainer**
  - ProgramIndex
    - ProgramIndexItem

**ProgramShowContainer**
  - PrgramShowDetail
    - ProgramShowSidebar
    - ProgramShowMain
  - ReviewsIndexContainer
    - ReviewsIndex
      - ReviewsIndexItem

**ReviewFormContainer**
  - ReviewForm

**ProgramFormContainer**
  - ProgramForm

### Bonus

**SearchContainer**
  - SearchFormContainer
    - SearchForm
  - SearchResultsContainer
    - SearchResults
      - SearchResultsItem

**TimelineContainer**
  - Timeline
    - TimelineItem

## Routes

| Path                 | Component               |
| -------------------- | ----------------------- |
| "/"                  | "ProgramIndexContainer" |
| "/programs"          | "ProgramIndexContainer" |
| "/sign_up"           | "AuthHeader"            |
| "/programs/:id"      | "ProgramShowContainer"  |
| "/programs/:id/new"  | "ReviewFormContainer"   |
| "/reviews/:id/edit   | "ReviewFormContainer"   |
| "/programs/new"      | "ProgramFormContainer"  |
| "/programs/:id/edit" | "ProgramFormContainer"  |
