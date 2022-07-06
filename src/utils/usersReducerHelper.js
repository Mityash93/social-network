export const commonReducerCase = (items, objPropsName, itemId, newObjProps) => {
    return items.map((user) => {
        if (user[objPropsName] === itemId) {
          return { ...user, ...newObjProps };
        }
        return user;
      })
}