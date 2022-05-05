const quotes = [
    {
        title: "늦은 시간에 먹으면 살이 더 찐다.",
        content: `밤에 먹으면 살이 찐다’는 속설에 대해서는 의견이 분분하다.
        인디애나대 의대 연구팀은 여러 연구사례를 종합 분석한 결과 살이 찌는 건 먹은 시간과 아무런 상관이 없다고 밝혔다.
        밤에 먹으면 살이 찐다고 느끼는 것은 단지 밤에 고열량 음식을 많이 먹기 때문이라는 것이다.
        그러나 미국 노스웨스턴대학 연구팀은 먹는 시간이 비만에 영향을 줄 수 있다는 것을 발견했다.
        연구진에 따르면 낮에 먹이를 먹은 쥐는 체중이 20% 증가한 반면 밤에 먹은 쥐들은 체중이 48% 증가했다.`
    },{
        title: "전자레인지에 데우면 영양소가 파괴된다.",
        content: `전자레인지가 다른 요리법보다 더 많은 영양소를 파괴하는 것은 아니다.
        오히려 전자레인지는 음식에 들어있는 수분만을 가열하기 때문에 다른 조리법에 비해 영양소가 빠져나갈 가능성이 적다.
        특히 비타민 C, B, 아미노산와 같은 수용성 영양소는 물로 끓이면 증발되기 쉬워 전자레인지로 익히는 것이 더 낫다.`
    },{
        title: "약간의 와인은 몸에 좋지만 맥주는 그렇지 않다.",
        content: `맥주도 와인과 같은 심혈관 질환 예방 효과가 있다.
        2011년 이탈리아의 교황 요한 바오로 2세 재단 연구팀은 약간의 음주가 건강에 도움이 된다는 연구 결과를 발표했다.
        연구팀은 알코올 성분이 5%인 맥주를 하루에 570cc 정도 마실 경우 심혈관계 질환의 위험을 낮출 수 있다고 설명했다.`
    },{
        title: "황설탕이 백설탕보다 더 몸에 좋다.",
        content: `어떤 사람들은 설탕이 진할수록 더욱 몸에 좋다고 믿는다. 제조 과정에서 설탕을 희게 만들기 위해 표백제를 사용한다는 것이다.
        하지만 실제로는 사탕수수 등에서 추출한 원료당을 탈색·정제 과정에서 색이 달라지는 것일 뿐 영양학적으로는 거의 차이가 없다.
        오히려 백설탕은 가장 먼저 정제돼 순도가 가장 높다. 반면 흑설탕은 2차로 생산된 황설탕에 캐러멜 시럽이나 당밀 성분을 섞어 만들어진 것으로 백설탕에 비해 순도가 떨어진다.`
    },{
        title: "신선식품은 항상 냉동식품보다 낫다.",
        content: `냉동식품은 불량식품과 같은 것으로 치부되곤 하지만 냉동식품이 다 나쁜 것은 아니다.
        냉동식품은 가장 신선할 때 수확해 급속동결한 것으로 식품의 조직과 맛, 신선도, 영양성분 등을 그대로 보존하고있다.
        반면 신선식품은 오래동안 팔리지 않거나 늦게 섭취할 경우 오히려 영양학적인 가치가 낮을 수 있다.`
    },{
        title: "계란을 많이 먹으면 콜레스테롤 농도가 높아진다.",
        content: `계란에는 약 250㎎의 콜레스테롤이 포함돼 있다. 이에 계란은 콜레스테롤 수치를 높이는 성인병의 주범으로 일컬어져왔다.
        그러나 2014년 미국 식생활자문위원회(DGAC)는 “음식을 통한 콜레스테롤 섭취가 혈중 콜레스테롤을 증가시키지 않으며 심장질환과는 관련성이 없다”고 최종 결론내렸다.
        건강한 성인의 경우 콜레스테롤이 높은 식품을 먹어도 건강에 큰 영향을 주지 않는다는 것이다.
        하지만 전문가들은 당뇨병 등 성인병이 있는 경우 여전히 콜레스테롤이 많은 음식은 피하는 것이 좋다고 조언했다.`
    },{
        title: "버터대신 마가린을 사용하는 것이 더 좋다.",
        content: `버터는 우유의 지방분을 모아 응고시킨 동물성 기름이며 마가린은 해바라기, 콩 등을 이용해 만든 식물성 기름이다.
        마가린이 식물성 기름인 까닭에 버터보다 건강에 더 좋을 것이라는 선입견이 있지만 이것은 사실이 아니다.
        우선 버터와 마가린의 열량에는 큰 차이가 없다.
        마가린을 사용한다고 해서 칼로리가 줄어드는 건 아니라는 뜻이다.
        또 마가린에는 버터에는 없는 트랜스 지방이 포함돼 있다.
        버터는 콜레스테롤이 많아 심장 질환을 유발하는 것으로 알려져왔으나 최근 사실이 아닌 것으로 밝혀졌다.`
    },{
        title: "유기농 식품이 영양학적으로 더 우수하다.",
        content: `유기농 식품은 영양학적으로 더 우수하고 안전한 것으로 받아들여진다. 하지만 2010년 영국 런던 보건대학원 연구진은 유기농 식품 섭취가 건강을 증진시킨다는 증거는 미미하다고 밝혔다.
        또 2012년 미국 스탠퍼드대 연구진은 지난 50여년간 발표된 논문 240개를 분석한 뒤 유기농 식품이 영양적인 측면에서 비유기농 식품과 큰 차이가 없고, 안전성 면에서도 나은 점이 별로 없다고 결론내렸다.`
    }
]

const title = document.querySelector("#quote p:nth-child(2)");
const content = document.querySelector("#quote p:last-child");

const todayQuote =quotes[Math.floor(Math.random()*quotes.length)]

title.innerText = todayQuote.title;
content.innerText = todayQuote.content;