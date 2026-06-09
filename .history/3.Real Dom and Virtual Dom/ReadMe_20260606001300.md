
# Real DOM vs Virtual DOM

## What is DOM?

DOM (Document Object Model) is a programming interface that represents an HTML document as a tree structure. It allows JavaScript to access and manipulate web page content, structure, and styles.

Example:

```html
<body>
  <h1>Hello World</h1>
  <button>Click Me</button>
</body>
```

The browser converts this HTML into a DOM Tree.

---

# Real DOM

The Real DOM is the actual DOM created and maintained by the browser.

Whenever a change occurs on a webpage, the browser updates the Real DOM and may re-render parts of the page.

## Advantages

* Native browser feature.
* Easy to manipulate using JavaScript.
* Direct access to HTML elements.

## Disadvantages

* DOM operations are expensive.
* Frequent updates can reduce performance.
* Re-rendering large applications can be slow.

## Example

```javascript
document.getElementById("title").innerText = "New Title";
```

Each update may trigger browser recalculations and repainting.

---

# Virtual DOM

The Virtual DOM is a lightweight copy of the Real DOM maintained by React.

Instead of updating the Real DOM directly, React first updates the Virtual DOM, compares it with the previous version, and then updates only the changed parts in the Real DOM.

This comparison process is called **Diffing**.

## Advantages

* Faster updates.
* Improved performance.
* Efficient rendering.
* Better user experience.

## Disadvantages

* Uses additional memory.
* Small applications may not benefit significantly.

---

# How Virtual DOM Works

### Step 1

React creates a Virtual DOM.

```jsx
<h1>Hello</h1>
```

### Step 2

State or props change.

```jsx
<h1>Hello Subhash</h1>
```

### Step 3

React creates a new Virtual DOM.

### Step 4

React compares the old Virtual DOM with the new one (Diffing).

### Step 5

Only the changed elements are updated in the Real DOM.

---

# Real DOM vs Virtual DOM

| Feature      | Real DOM                     | Virtual DOM                |
| ------------ | ---------------------------- | -------------------------- |
| Update Speed | Slower                       | Faster                     |
| Manipulation | Direct                       | Indirect                   |
| Memory Usage | Lower                        | Higher                     |
| Performance  | Lower                        | Higher                     |
| Re-rendering | Updates entire affected tree | Updates only changed nodes |
| Used In      | Vanilla JavaScript           | React                      |

---

# Example Comparison

## Real DOM

```javascript
document.getElementById("count").innerText = count;
```

Updates the browser DOM directly.

## Virtual DOM (React)

```jsx
const [count, setCount] = useState(0);

return <h1>{count}</h1>;
```

React updates the Virtual DOM first and then efficiently updates only the necessary parts of the Real DOM.

---

# Why React Uses Virtual DOM

React uses the Virtual DOM because it:

* Improves performance.
* Reduces expensive DOM operations.
* Updates only the necessary elements.
* Provides a smoother user experience.
* Makes UI rendering more efficient.
