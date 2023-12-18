import { i_create_init_message } from '@types'
import { user_names } from './user_names'

export const init_messages: i_create_init_message[] = [
  {
    author_name: user_names.baron,
    message: 'Первый нах',
    fake_id: 1,
  },

  {
    author_name: user_names.duke,
    message: 'Первый нах',
    fake_id: 2,
  },

  {
    author_name: user_names.duke,
    message: 'Черт!',
    fake_id: 3,
    reply_to_fake_id: 1,
  },

  {
    author_name: user_names.duke,
    message: 'Арракис мой!',
    fake_id: 4,
  },

  {
    author_name: user_names.baron,
    message: 'Посмотрим...',
    fake_id: 5,
    reply_to_fake_id: 4,
  },

  {
    author_name: user_names.whorm,
    message: 'Уничтожил сотню топтунов',
    fake_id: 6,
  },

  {
    author_name: user_names.baron,
    message: 'ООО да',
    fake_id: 7,
    reply_to_fake_id: 6,
  },

  {
    author_name: user_names.stilgar,
    message: 'Да свершится воля великого червя',
    fake_id: 8,
    reply_to_fake_id: 6,
  },

  {
    author_name: user_names.covid,
    message: 'Страх убийца разума',
    fake_id: 9,
  },

  {
    author_name: user_names.mother,
    message: 'Слова истинного разума',
    fake_id: 10,
    reply_to_fake_id: 9,
  },

  {
    author_name: user_names.jessica,
    message: 'Я научила себя не жалеть о содеянном. За свои ошибки я заплачу',
    fake_id: 11,
  },

  {
    author_name: user_names.paul,
    message:
      'Да не дерзнет никто создавать машину по образу и подобию человеческого разума',
    fake_id: 12,
  },

  {
    author_name: user_names.chani,
    message:
      'Усул, ты плачешь! Усул, опора моя, сила моя – ты отдаешь влагу мертвым. Но чьим?',
    fake_id: 13,
  },

  {
    author_name: user_names.mother,
    message:
      'Да не дерзнет никто создавать машину, ПОДМЕНЯЮЩУЮ человеческий разум',
    fake_id: 14,
    reply_to_fake_id: 12,
  },

  {
    author_name: user_names.stilgar,
    message:
      'Ты должен выбрать себе имя, которым мы будем называть тебя открыто',
    fake_id: 15,
  },

  {
    author_name: user_names.paul,
    message: 'Как вы называете тень от второй луны?',
    fake_id: 16,
    reply_to_fake_id: 15,
  },

  {
    author_name: user_names.stilgar,
    message: 'Тень второй луны мы называем Муад’диб',
    fake_id: 17,
    reply_to_fake_id: 16,
  },

  {
    author_name: user_names.paul,
    message: 'Тогда зовите меня Муад’диб',
    fake_id: 18,
    reply_to_fake_id: 17,
  },

  {
    author_name: user_names.halec,
    message:
      'Не в настроении?! А при чем тут твое настроение? Сражаются тогда, когда это необходимо',
    fake_id: 19,
  },

  {
    author_name: user_names.idaho,
    message:
      'Зачем просить вести себя вперед человека, который заблудился сам?',
    fake_id: 20,
    reply_to_fake_id: 19,
  },
  {
    author_name: user_names.whorm,
    message:
      'Кто поднялся на цыпочки, не может [долго] стоять. Кто делает большие шаги, не может [долго] идти. Кто сам себя выставляет на свет, тот не блестит. Кто сам себя восхваляет, тот не добудет славы',
    fake_id: 21,
    reply_to_fake_id: 19,
  },

  {
    author_name: user_names.idaho,
    message:
      'Когда прошлое вернется к нам во всей своей славе и боли, мы не будем знать, радостно ли встречать его или бежать',
    fake_id: 22,
    reply_to_fake_id: 19,
  },

  {
    author_name: user_names.paul,
    message:
      'В испытании человека не по тому судят, что он мог бы сделать, по твоему мнению, а по тому, что он делает в действительности',
    fake_id: 23,
  },
  {
    author_name: user_names.stilgar,
    message:
      'Пустыня — хирург, срезающий кожу, чтобы показать, что таится под ней',
    fake_id: 24,
    reply_to_fake_id: 23,
  },

  {
    author_name: user_names.baron,
    message: 'Зачастую бездействие ошибочно принимают за миролюбие',
    fake_id: 25,
    reply_to_fake_id: 23,
  },
  {
    author_name: user_names.paul,
    message: 'Золотой путь',
    fake_id: 26,
    reply_to_fake_id: 25,
  },

  {
    author_name: user_names.paul,
    message: 'Страх есть малая смерть, влекущая за собой полное уничтожение',
    fake_id: 27,
  },

  {
    author_name: user_names.duke,
    message: 'Любая дорога, пройденная до конца, приводит в никуда',
    fake_id: 28,
    reply_to_fake_id: 27,
  },

  {
    author_name: user_names.stilgar,
    message:
      'Мне часто приходится говорить не то, что я думаю. Это называется дипломатией',
    fake_id: 29,
    reply_to_fake_id: 28,
  },
  {
    author_name: user_names.baron,
    message:
      'Человек, упрямо преследующий дичь там, где её нет, никогда не достигнет успеха.',
    fake_id: 30,
    reply_to_fake_id: 28,
  },

  {
    author_name: user_names.jessica,
    message:
      'Попытка понять Муаддиба, не поняв его смертельных врагов, — это попытка увидеть правду без знания лжи. Это попытка понять, что такое свет, не зная, что такое тьма. Это просто невозможно',
    fake_id: 31,
  },

  {
    author_name: user_names.duke,
    message:
      'Нет никакой загадки человеческой жизни. Это не проблема, которую нужно решить,',
    fake_id: 32,
    reply_to_fake_id: 31,
  },

  {
    author_name: user_names.mother,
    message:
      'Когда-то давно люди понадеялись на машины, думая, что с их помощью смогут сделаться свободными. Но вместо этого машины помогли меньшинству поработить большинство',
    fake_id: 33,
    reply_to_fake_id: 31,
  },

  {
    author_name: user_names.stilgar,
    message:
      'Плоть сдается, думал он. Вечность забирает свое назад. Да, нашим телам недолго бороздить эти воды, попляшем в опьянении собой и любовью, выдумаем пару странных идеек, а потом каюк — время, бери нас! Что сказать? Вышло так, пожил... и все, исчез, но ведь — жил!',
    fake_id: 34,
    reply_to_fake_id: 31,
  },

  {
    author_name: user_names.whorm,
    message: 'Знающий людей разумен, а знающий себя самого прозорлив',
    fake_id: 35,
    reply_to_fake_id: 31,
  },

  {
    author_name: user_names.paul,
    message:
      'Быть может, самым ужасным моментом познания является тот, когда ты понимаешь, что твой отец — обычный человек из плоти и крови',
    fake_id: 36,
    reply_to_fake_id: 31,
  },

  {
    author_name: user_names.duke,
    message:
      'вся эта правда — она только для твоих плеч... раз уж тебя угораздило взять на себя ответственность, никогда не показывай её тяжести.',
    fake_id: 37,
  },

  {
    author_name: user_names.mother,
    message:
      'Преподобная мать должна сочетать соблазнительные хитрости куртизанки с неприступностью и величием девственной богини, сохраняя эти качества столь долго, сколько позволяет ее юность. А когда ее молодость и красота исчезнут, их место займут коварство и находчивость',
    fake_id: 38,
    reply_to_fake_id: 37,
  },

  {
    author_name: user_names.covid,
    message:
      'Прогресс служит защитным механизмом, отгораживающим нас от ужасов будущего',
    fake_id: 39,
    reply_to_fake_id: 11,
  },
  {
    author_name: user_names.whorm,
    message:
      'Кто много говорит, тот часто терпит неудачу; поэтому лучше всего соблюдать середину',
    fake_id: 40,
    reply_to_fake_id: 7,
  },

  {
    author_name: user_names.whorm,
    message:
      'когда мудрец боится управлять вселенной, то ему можно поручить ее; когда он сожалеет, что управляет вселенной, то ему можно отдать ее',
    fake_id: 41,
    reply_to_fake_id: 22,
  },
  {
    author_name: user_names.whorm,
    message: 'Осуществление недеяния всегда приносит спокойствие',
    fake_id: 42,
    reply_to_fake_id: 31,
  },
  {
    author_name: user_names.whorm,
    message:
      'Умеющий закрывать двери не пользуется засовами, а то, что он закрыл, невозможно открыть',
    fake_id: 43,
    reply_to_fake_id: 33,
  },
]
