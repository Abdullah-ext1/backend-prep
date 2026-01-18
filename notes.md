## Why use select: false in Mongoose?
Answer: To prevent sensitive fields like passwords from being returned in queries by default, reducing the risk of accidental exposure.

## Why use { timestamps: true }?
Answer: It automatically manages createdAt and updatedAt fields, ensuring consistent time tracking without manual handling.

## Why use enum in Mongoose?
Answer:Enum enforces a fixed set of allowed values at the schema level, preventing invalid data and strengthening authorization logic.
 enum = allowed values only
 Prevents invalid roles
 Protects authorization logic
 Production-ready feature