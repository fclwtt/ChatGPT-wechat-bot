export default {
  // 填入你的OPENAI_API_KEY
  OPENAI_API_KEY: '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',
  // 设置获取消息的重试次数
  retryTimes: 3,
  // 在群组中设置唤醒微信机器人的关键词
  groupKey: '牛牛',
  // 在私聊中设置唤醒微信机器人的关键词
  privateKey: '牛牛',
  // 重置上下文的关键词，如可设置为reset
  resetKey: '重置',
  // 开启会后收到ChatGPT的自动回复
  autoReply: true,
  // 根据正则匹配是否自动通过好友验证
  friendShipRule: /chatgpt|chat/,
  // 是否在群聊中按照回复的格式进行回复
  groupReplyMode: true,
  // 是否在私聊中按照回复的格式进行回复
  privateReplyMode: false,
};
