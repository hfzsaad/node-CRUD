module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        token: String,
        username: String,
        email: String,
        password: String,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };