
export function filterUsers(users, {searchQuery, roleFilter, sortField, sortOrder}){
  let filtered = [...users]; //copy array to avoid mutation 

  // search by name
  if (searchQuery) { 
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // search by role
  if (roleFilter && roleFilter !== 'all') {
    filtered = filtered.filter(user => user.role === roleFilter);
  }

  // sort by field
  if (sortField) {
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  return filtered;
}

