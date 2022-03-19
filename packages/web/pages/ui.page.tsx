import Button from '@web/components/Button'

const UIPage = () => {
  return (
    <div style={{ padding: 10 }}>
      <div>
        <h1>default</h1>
        <Button size="small">size:small</Button>
        <Button size="medium">size:medium</Button>
        <Button size="large">size:large</Button>
        <Button disabled>disabled</Button>
      </div>
      <div>
        <h1>primary</h1>
        <Button type="primary" size="small">
          size:small
        </Button>
        <Button type="primary" size="medium">
          size:medium
        </Button>
        <Button type="primary" size="large">
          size:large
        </Button>
        <Button type="primary" disabled>
          disabled
        </Button>
      </div>
    </div>
  )
}

export default UIPage
