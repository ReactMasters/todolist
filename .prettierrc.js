module.exports = {
  printWidth: 80, // 줄바꿈 할 가로 길이
  tabWidth: 2, // 기본 indent 사이즈
  useTabs: false, // indent는 \t이 아닌 \s로
  semi: false, // ; 없이
  singleQuote: true, // '' 로
  quoteProps: 'as-needed', // object key를 필요할 때만 따옴표로 감싸기
  jsxSingleQuote: false, // JSX 속성에 싱글 쿼츠 쓸건지
  trailingComma: 'es5', // 객체 속성이나 아이템 여러줄료 표현할 때 마지막 줄에 따옴표 할지
  // es5 : es5로 유효한 따옴표만 마지막에 붙임.
  bracketSpacing: true, // true -> { foo: bar }, false -> {foo: bar}
  bracketSameLine: false, // 열른 마크업에서 닫는 '>'를 한줄 떼고 표현할지
  arrowParens: 'always', // 화살표 함수 인자에 괄호 붙이기, 붙는게 타입 써주기 편해서 더 좋음! 그래서 기본 값이 옛날엔 'avoid' 였다가 바뀜.
  endOfLine: 'lf', // 줄바꿈 기호 \n으로 쓰기 (캐리지 리턴 강제하지 않기)
}
