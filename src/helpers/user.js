const adaptUserToClient = (user) => ({
  avatarUrl: user.avatar_url,
  isPro: user.is_pro,
  name: user.name,
});

export {adaptUserToClient};
