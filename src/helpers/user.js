const adaptUserToClient = (user) => ({
  avatarUrl: user.avatar_url,
  email: user.email,
  id: user.id,
  isPro: user.is_pro,
  name: user.name,
});

export {adaptUserToClient};
