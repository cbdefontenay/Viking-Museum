// const kv = await Deno.openKv();

// await kv.set(["users", "alice"], { name: "Alice" });

// // Read back this key.
// const res = await kv.get(["users", "alice"]);
// console.log(res.key); // [ "users", "alice" ]
// console.log(res.value); // { name: "Alice" }

// // Delete the key.
// await kv.delete(["users", "alice"]);

// // Reading back the key now returns null.
// const res2 = await kv.get(["users", "alice"]);
// console.log(res2.key); // [ "users", "alice" ]
// console.log(res2.value); // null
