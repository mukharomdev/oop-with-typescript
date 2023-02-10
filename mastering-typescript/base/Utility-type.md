# TypeScript Visualized: 15 Most Used Utility Types
#### <span style="color:rgb(117, 117, 117)">Utility Types — Explained with animations. Master TypeScript Utility Types and understand how TypeScript’s built-in Utility Types work.</span>

In the process of using TypeScript, we are programming type-oriented. In order to meet different work scenarios, we need to transform the known types. For the convenience of TypeScript users, the TypeScript development team has provided us with many useful built-in utility types. With these utility types, we can easily convert types, extract types, exclude types, or get the parameter type or return value type of a function.

In this article, I picked 15 very useful types from TypeScript’s built-in utility types, and introduce their usage and internal working principles in the form of images or animations. After reading this article, I believe you can really master the usage of these built-in utility types.

#### 1. Partial<Type>

Constructs a type with all properties of Type set to optional.

![partial type](/images/img_utility_type/partial-utility-type.webp)

```javascript
/**
 * Make all properties in T optional. 
 * typescript/lib/lib.es5.d.ts
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```
![partial type2](/images/img_utility_type/partial2-utility-type.gif)
![partial type3](/images/img_utility_type/partial3-utility-type.webp)
#### 2. Required<Type>

Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

![required type](/images/img_utility_type/required-utility-type.webp)

```javascript
/**
 * Make all properties in T required.
 * typescript/lib/lib.es5.d.ts
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```
![required2 type](/images/img_utility_type/required2-utility-type.gif)
![required3 type](/images/img_utility_type/required3-utility-type.webp)

#### 3. Readonly<Type>

Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

![readonly type](/images/img_utility_type/readonly-utility-type.webp)

```javascript
/**
 * Make all properties in T readonly.
 * typescript/lib/lib.es5.d.ts
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```
![readonly2 type](/images/img_utility_type/readonly2-utility-type.gif)
![readonly3 type](/images/img_utility_type/readonly3-utility-type.webp)

#### 4. Record<Keys, Type>

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

![record type](/images/img_utility_type/record-utility-type.webp)


```javascript
/**
 * Construct a type with a set of properties K of type T.
 * typescript/lib/lib.es5.d.ts
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

#### 5. Exclude<UnionType, ExcludedMembers>

Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
![exlude type](/images/img_utility_type/exlude-utility-type.webp)

```javascript
/**
 * Exclude from T those types that are assignable to U.
 * typescript/lib/lib.es5.d.ts
 */
type Exclude<T, U> = T extends U ? never : T
```

![exlude2 type](/images/img_utility_type/exlude2-utility-type.gif)
![exlude3 type](/images/img_utility_type/exlude3-utility-type.webp)