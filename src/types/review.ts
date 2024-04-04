export interface Review {
  REVIEW_HDR_ID: number
  PRODUCT_ID: number
  PROD_NBR: number
  REVIEW_ID: number
  REVIEW_TYPE: string
  ORDER_DATE: string
  SUBMISSION_DATE: string
  CUSTOMER_NAME: string
  REVIEW_TITLE: string
  REVIEW_TEXT: string
  RATING: number
  VIDEO_URL: string
  RECOMMENDATION: string
  RESPONSE_TITLE: string
  RESPONSE_TEXT: string
  CUSTOM_TEXT: string
  PUBLISHED: string
  objectID: string
  _highlightResult: HighlightResult
}

export interface HighlightResult {
  PROD_NBR: ProdNbr
}

export interface ProdNbr {
  value: string
  matchLevel: string
  fullyHighlighted: boolean
  matchedWords: string[]
}
