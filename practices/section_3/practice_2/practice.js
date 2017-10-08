function create_updated_collection(collection_a, object_b) {
  collection_a.filter((a)=> {
    object_b.value.map((b)=> {
      if (a.key === b) {
        a.count -= Math.floor(a.count / 3);
      }
    })
  });

  return collection_a;
}

module.exports = create_updated_collection;
