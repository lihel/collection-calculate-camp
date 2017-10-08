function create_updated_collection(collection_a, object_b) {
  var newarr = [];
  var k = 0;
  for (var j = 0; j < 9; j++)
    newarr[j] = {};
  newarr[0].key = collection_a[0];
  newarr[0].count = 0;
  collection_a.map((a)=> {
    if (a === newarr[k].key) {
      newarr[k].count++;
    }
    else {
      k++;
      newarr[k].key = a;
      newarr[k].count = 1;
    }
  });

  newarr.filter((n)=> {
    object_b.value.map((b)=> {
      if (n.key === b) {
        n.count -= Math.floor(n.count / 3);
      }
    });
  });
  return newarr;
}

module.exports = create_updated_collection;
