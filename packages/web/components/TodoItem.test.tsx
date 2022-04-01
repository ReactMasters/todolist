import TodoItem from './TodoItem'

describe('tests TodoItem component', () => {
  it('content가 보인다.', () => {})
  it('status에 따라 checkbox.isChecked가 결정된다.', () => {})
  it('dueDateTime이 있을 경우, 만료일이 MMM D, YYYY 형식으로 표시된다.', () => {})
  it('dueDateTime이 만료됐을 경우, 아이콘과 날짜 표시가 빨간색으로 표시된다.', () => {})
  it('tags 목록 내 TodoTag 아이템이 모두 표시된다.', () => {})
  it('체크되었을 경우, Strikethrough 스타일을 적용한다.', () => {})
  it('체크 해제되었을 경우, Strikethrough 스타일을 해제한다.', () => {})
  it('dueDateTime 정보만 없을 경우, content와 tags만 표시된다.', () => {})
  it('tags 정보만 없을 경우, content와 dueDateTime만 표시된다.', () => {})
  it('dueDateTime과 tags 모두 없을 경우, content만 표시된다.', () => {})
})
