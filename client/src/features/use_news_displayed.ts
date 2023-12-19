import { computed } from 'vue'

const displayed_news: Set<string> = new Set()
const displayed_wrapper = (id) => {
  return !id || displayed_news.has(id)
}

export const use_news_displayed = (reply_to, news_id) => {
  const is_displayed = () => {
    if (!reply_to) return true

    return displayed_news.has(reply_to)
  }

  const change_visible_news = () => {
    console.log('displayed_news: ', displayed_news)

    displayed_news.has(news_id)
      ? displayed_news.delete(news_id)
      : displayed_news.add(news_id)
  }

  return { is_displayed, change_visible_news }
}
