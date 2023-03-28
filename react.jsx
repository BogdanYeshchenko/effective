useEffect(() => {
  document.addEventListener("keydown", handlePressKeybord);

  return () => {
    document.removeEventListener("keydown", handlePressKeybord);
  };

  //10 рядок отменит проверку масива зависимостей, не будет ругаться на вложеные функции!!!!!!!!!!!!!!!

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
